import Image from "next/image"

export default function Hero() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-secondary-foreground">
            Hi, I'm Clarice
          </h1>
          <p className="text-xl mb-6 text-secondary-foreground">
            I'm passionate about programming and always looking for new ways to
            improve. Here you'll find some of my projects, driven by my
            curiosity and desire to learn.
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/diva.jpeg"
            alt="Clarice Leal"
            width={400}
            height={400}
            className="rounded-full border-4 border-primary object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  )
}
