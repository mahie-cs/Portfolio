'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sendMessage, type ContactState } from '@/app/actions/contact';

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      formRef.current?.reset();
    }
    if (state?.error) toast.error(state.error);
  }, [state]);

  const e = state?.fieldErrors;
  return (
    <form ref={formRef} action={action} className="space-y-5" noValidate>
      <Field id="fullname" label="Name" error={e?.fullname}>
        <Input id="fullname" name="fullname" autoComplete="name" required aria-invalid={!!e?.fullname} placeholder="Jane Doe" className="h-11" />
      </Field>
      <Field id="email" label="Email" error={e?.email}>
        <Input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!e?.email} placeholder="jane@company.com" className="h-11" />
      </Field>
      <Field id="message" label="Message" error={e?.message}>
        <Textarea id="message" name="message" required rows={6} aria-invalid={!!e?.message} placeholder="What are you working on?" />
      </Field>
      {/* Honeypot field: hidden from people, tempting for bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <Button type="submit" size="lg" disabled={pending} className="w-full rounded-full sm:w-auto">
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {pending ? 'Sending' : 'Send message'}
      </Button>
    </form>
  );
}
