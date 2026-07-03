import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Let&apos;s Talk
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Consectetur adipiscing elit sed do eiusmod?
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-8 space-y-2 text-sm text-stone">
            <p>
              Email:{" "}
              <a href="mailto:hello@davantealexander.com" className="font-medium text-ink hover:text-gold">
                hello@davantealexander.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+14695550100" className="font-medium text-ink hover:text-gold">
                (469) 555-0100
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-2xl border border-black/5 bg-cream p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
