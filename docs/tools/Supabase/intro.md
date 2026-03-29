---
sidebar_position: 1
---

Supabase is widely used to ship products quickly. In practice, the main risk is usually not the platform itself, but insecure defaults and rushed deployment decisions.

Typical real-world problems:

- Missing or weak Row Level Security (RLS)
- Old test tables and Remote Procedure Call (RPC) functions still exposed
- Over-permissive policies for the `anon` role
- Reliance on "security by obscurity" instead of explicit access control

This section focuses on practical guidance to assess exposure, validate access controls, and harden Supabase REST configurations.