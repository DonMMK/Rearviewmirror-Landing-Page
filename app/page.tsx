import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#FCD0A1] relative overflow-hidden">
          <Image
            src="/rearview_mirror-no-bg.png"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-22 px-10 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Join the conversation: Secure your spot on our Social Networking app for Couples!
          </h1>
          <p className="text-gray-500">
            Join the waitlist to be notified when our app is available!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
