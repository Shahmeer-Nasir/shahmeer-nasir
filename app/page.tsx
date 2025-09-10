import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import CarouselComp from "@/components/carousel"

export default function IndexPage() {
  return (
    <main className="container">
      <section
        id="about"
        className="grid items-center justify-center pb-8 pt-6 md:py-16"
        role="banner"
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <p className="text-orange-300">People call me</p>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Shahmeer Nasir<span className="text-orange-400">.</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I am full-stack developer with a passion for learning and coding.
          </p>
          <Link
            rel="noreferrer"
            href={"#projects"}
            className={`${buttonVariants({ size: "lg" })} mt-6`}
          >
            See my work
          </Link>
        </div>
        <div className="flex justify-center">
        </div>
      </section>
      <section
        id="projects"
        className=" grid items-center justify-center gap-10 pb-8 pt-6 md:py-10"
        role="carousel"
      >
        <div className="flex max-w-4xl flex-col items-center gap-2">
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Projects
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8">
          <CarouselComp projects={siteConfig.projects} />
          <Button className="w-fit" variant="outline">
            Show More
          </Button>
        </div>
      </section>
      {/* Contact Section */}
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
    </main>
  )
}
