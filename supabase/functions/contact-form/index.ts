// supabase/functions/contact-form/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@3.2.0";

serve(async (req) => {
  // ✅ Handle CORS preflight (OPTIONS) request
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*", // or "http://localhost:5173"
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  const supabase = createClient(
    Deno.env.get("PROJECT_URL")!,
    Deno.env.get("SERVICE_ROLE_KEY")!
  );

  const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    // 1️⃣ Save to Supabase
    const { error } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("DB Error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    // 2️⃣ Send Email Notification
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "generaltonde@gmail.com", // 👈 make sure this is in your .env
      subject: "New Message from Portfolio Contact Form",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // ✅ CORS header
      },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // ✅ CORS header on error too
      },
    });
  }
});
