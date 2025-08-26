import Link from "next/link"
import LogoLoop from "@/animations/LogoLoop/LogoLoop"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import CarouselComp from "@/components/carousel"
import { Icons } from "@/components/icons"

const techLogos = [
  { node: <Icons.moon />, title: "React", href: "https://react.dev" },
  { node: <Icons.logo />, title: "Next.js", href: "https://nextjs.org" },
  { node: <Icons.codepen />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <Icons.linkedin />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function IndexPage() {
  return (
    <main className="container">
      {/* BANNER SECTION START */}
      <section
        id="about"
        className="flex min-h-[60vh] items-center pb-8 pt-6 md:py-16"
        role="banner"
      >
        <div className="relative flex flex-col flex-1 items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight  md:text-4xl">
            Turning ideas into live links.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mb-4">
            A Full-stack developer having an extensive range of skillset.
          </p>
          <Link
            target=""
            rel="noreferrer"
            href={siteConfig.links.email}
            className={buttonVariants({ size: "lg" })}
          >
            Let&apos;s Talk
          </Link>
        </div>
        <div className="relative h-full flex-1 flex justify-center">
          <Icons.blob className="absolute -z-10 pointer-events-none -translate-y-1/2 size-auto top-1/2 -scale-x-100" />
        </div>
      </section>
      {/* BANNER SECTION END */}
      {/* LOGO SECTION START */}
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={100}
          gap={400}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      {/* LOGO SECTION END */}
      {/* PROJECTS SECTION START */}
      <section
        id="projects"
        className=" flex flex-col items-center justify-center gap-20 pb-8 pt-6 md:py-10"
        role="carousel"
      >
        <div className="flex max-w-4xl flex-col items-center justify-center gap-2">
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Projects
          </h1>
        </div>
        <div className="flex flex-col items-center gap-20">
          <CarouselComp projects={siteConfig.projects} />
          <Button className="w-fit" size={"lg"} variant="outline">
            Show More
          </Button>
        </div>
      </section>
      {/* PROJECTS SECTION END */}
      {/* CONTACT SECTION START */}
      <section
        id="contact"
        className="grid items-center justify-center gap-10 pb-8 pt-6 md:py-10"
        role="contact"
      >
        <div className="flex max-w-4xl flex-col items-center gap-2">
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Get In Touch
          </h1>
          <p className="max-w-[700px] text-center text-lg text-muted-foreground">
            Let&apos;s work together! Feel free to reach out through any of
            these channels.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Email */}
            <Link
              href={siteConfig.links.email}
              className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
            >
              <span className="text-4xl">📧</span>
              <h3 className="font-semibold">Email</h3>
              <p className="text-center text-sm text-muted-foreground">
                shahmeernasirr@gmail.com
              </p>
            </Link>

            {/* GitHub */}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
            >
              <span className="text-4xl">💻</span>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-center text-sm text-muted-foreground">
                @shahmeer-nasir
              </p>
            </Link>

            {/* LinkedIn */}
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
            >
              <span className="text-4xl">💼</span>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-center text-sm text-muted-foreground">
                shahmeer-nasir
              </p>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-muted-foreground">
              Available for freelance opportunities and full-time positions
            </p>
            <Link href={siteConfig.links.email}>
              <Button className="w-fit" variant="outline">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END */}
    </main>
  )
}
