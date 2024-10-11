import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { PhoneInput } from "./ui/phone-input";
import { Textarea } from "./ui/textarea";
import ShimmerButton from "./magicui/shimmer-button";
// import { useSendEmail } from '@/hooks/useSendEmail';
// import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  // const { t } = useTranslation();
  // const { form, onSubmit } = useSendEmail();

  return (
    <h1>_</h1>
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="flex flex-col gap-6"
    //   >
    //     <FormField
    //       control={form.control}
    //       name="username"
    //       render={({ field }) => (
    //         <FormItem className="flex flex-col gap-1 w-full">
    //           <FormLabel className="font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block tracking-wide text-lg md:text-xl xl:text-2xl">
    //             {t('form.name')}
    //           </FormLabel>
    //           <FormControl>
    //             <Input
    //               {...field}
    //               placeholder={t('form.name')}
    //               type="text"
    //               required
    //               className="w-full px-4 py-6 placeholder:text-sm md:placeholder:text-base xl:placeholder:text-lg text-base md:text-lg xl:text-xl"
    //             />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="phone"
    //       render={({ field }) => (
    //         <FormItem className="flex flex-col gap-1 w-full">
    //           <FormLabel className="font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block tracking-wide text-lg md:text-xl xl:text-2xl">
    //             {t('form.phone')}
    //           </FormLabel>
    //           <FormControl>
    //             <PhoneInput
    //               {...field}
    //               required
    //               placeholder={t('form.phone')}
    //               // className="w-full text-xl px-4 py-6 placeholder:text-lg"
    //             />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="email"
    //       render={({ field }) => (
    //         <FormItem className="flex flex-col gap-1 w-full">
    //           <FormLabel className="font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block tracking-wide text-lg md:text-xl xl:text-2xl">
    //             {t('form.email')}
    //           </FormLabel>
    //           <FormControl>
    //             <Input
    //               {...field}
    //               placeholder={t('form.email')}
    //               type="email"
    //               required
    //               className="w-full px-4 py-6 placeholder:text-sm md:placeholder:text-base xl:placeholder:text-lg text-base md:text-lg xl:text-xl"
    //             />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="description"
    //       render={({ field }) => (
    //         <FormItem className="flex flex-col gap-1 w-full">
    //           <FormLabel className="font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block tracking-wide text-lg md:text-xl xl:text-2xl">
    //             {t('form.desc')}
    //           </FormLabel>
    //           <FormControl>
    //             <Textarea
    //               {...field}
    //               placeholder={t('form._desc')}
    //               required
    //               className="w-full px-4 py-3 placeholder:text-sm md:placeholder:text-base xl:placeholder:text-lg text-base md:text-lg xl:text-xl"
    //               rows={4}
    //             />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     />

    //     <ShimmerButton
    //       background="#106448"
    //       shimmerSize="1px"
    //       className="text-base md:text-lg xl:text-xl font-medium shadow-2xl text-foreground"
    //     >
    //       {t('form.send')}
    //     </ShimmerButton>
    //   </form>
    // </Form>
  );
};
