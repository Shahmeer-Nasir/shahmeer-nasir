"use client"
import React from "react"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Project {
  id: number
  title: string
  description: string
  icon: string
  tech: string[]
  link: string
}

interface CarouselCompProps {
  projects: Project[]
}

function CarouselComp({ projects }: CarouselCompProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-[3rem]">
        {projects.map((project) => (
          <CarouselItem key={project.id} className="pl-[3rem] h-auto md:basis-1/2 lg:basis-1/3">
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block h-full rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselComp
