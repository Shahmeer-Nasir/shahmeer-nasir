import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import CarouselComp from "@/components/carousel"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <main className="container">
      {/* About Section START */}
      <section
        id="about"
        className=""
        role="banner"
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <p className="text-2xl">Hi</p>
          <p className="text-orange-300">People call me</p>
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Shahmeer Nasir<span className="">.</span>
          </h1>
          <h2 className="text-muted-foreground mt-4">
            I like coding and building stuff 😃
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I am a full-stack developer with a passion for learning and coding modern web technologies.
          </p>
          <Link
            rel="noreferrer"
            href={"#projects"}
            className={`${buttonVariants({ size: "lg" })} mt-8`}
          >
            See my work
            <Icons.downArrow className="mt-[0.1rem] group-hover:animate-bounce" />
          </Link>
        </div>
        <div className="flex justify-center">
        </div>
      </section>
      {/* About Section END */}
      {/* Project Section START */}
      <section
        id="projects"
        className=""
        role="carousel"
      >
        <div className="flex flex-col w-full gap-10">
          <h2 className="text-center">My Work</h2>
          <div className="flex flex-col w-full items-center gap-8">
            <CarouselComp projects={siteConfig.projects} />
            <Button className="" variant="outline">Show More</Button>
          </div>
        </div>
      </section>
      {/* Project Section N */}
      {/* Contact Section START */}
      <section
        id="contact"
        className=""
        role="contact"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-center">Get In Touch</h2>
            <p className="max-w-[700px] text-center text-lg text-muted-foreground">
              Let&apos;s work together! Feel free to reach out through any of
              these channels.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="grid w-full max-w-2xl grid-cols-1 gap-6 lg:grid-cols-3">
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

            <div className="flex flex-col items-center gap-10">
              <p className="text-center text-sm text-muted-foreground">
                Available for freelance opportunities and full-time positions
              </p>
              <Link
                href={siteConfig.links.email}
                rel="noreferrer"
                className={buttonVariants({ size: "lg" })}
                >
                  Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section END */}
    </main>
  )
}
