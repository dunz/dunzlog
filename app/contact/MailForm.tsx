'use client';
import { ChangeEvent, FC, useRef, useState, useTransition } from 'react';

import { sendEmail } from '@/service/email/actions';
import { Mail, mailSchema } from '@/validation/schema';

const MailForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Partial<Mail>>({});

  const validate = (formData: FormData) => {
    const from = formData.get('from') as string;
    const title = formData.get('title') as string;
    const message = formData.get('message') as string;

    const result = mailSchema.safeParse({ from, title, message });
    if (!result.success) {
      result.error.issues.forEach(({ path, message }) => {
        setErrors((prev) => ({
          ...prev,
          [path[0]]: message,
        }));
      });
      return false;
    }
    return true;
  };

  const submit = async (formData: FormData) => {
    const from = formData.get('from') as string;
    const title = formData.get('title') as string;
    const message = formData.get('message') as string;

    if (!validate(formData)) {
      return;
    }
    startTransition(async () => {
      try {
        await sendEmail({ from, title, message });
        formRef.current?.reset();
        alert('이메일을 전송했습니다!');
      } catch (error) {
        console.error(error);
      }
    });
  };

  const onChangeForm = ({ target }: ChangeEvent<HTMLFormElement>) => {
    if (!target.name) {
      return;
    }
    const result = mailSchema.shape[target.name as keyof Mail].safeParse(target.value);
    setErrors((prev) => ({
      ...prev,
      [target.name]: result.success ? undefined : result.error.issues[0].message,
    }));
  };

  return (
    <form className="flex w-1/2 flex-col gap-5" action={submit} onBlur={onChangeForm} ref={formRef}>
      <legend className="self-center text-2xl">Send me an email</legend>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="from" className="font-bold">
          Your Email
        </label>
        <input type="from" id="from" className="input" name="from" />
        {errors.from && <p className="text-red-500">{errors.from}</p>}
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="title" className="font-bold">
          Title
        </label>
        <input type="text" id="title" className="input" name="title" />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="message" className="font-bold">
          Message
        </label>
        <textarea id="message" className="input h-36" name="message" />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </fieldset>
      <button type="submit" className="button-primary w-full rounded p-5" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default MailForm;
