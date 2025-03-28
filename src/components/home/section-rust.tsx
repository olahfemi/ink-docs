import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import { useRive } from '@rive-app/react-canvas'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Clouds } from './clouds'
import { BubbleContainer } from '../bubblecontainer'

export function SectionRust() {
  const { RiveComponent: RustMedal } = useRive({
    src: useBaseUrl('animations/Medal.riv'),
    autoplay: true,
  })
  return (
    <section
      className="relative flex flex-col items-center justify-center section-rust lg:h-[800px]"
      style={{
        background: 'linear-gradient(180deg,rgba(24,18,56,0) 0%,#221E4A 100%)',
      }}
    >
      <Clouds className="absolute bottom-0 left-1/3" />
      <div className="container relative z-10 flex flex-col items-center justify-center">
        <BubbleContainer>
          <MainCta
            variant="right"
            title="Get Rust-Powered Protection Built-in"
            description="Deploy smart contracts with built-in safety guarantees from the world's most secure programming language."
            level="h2"
            cta={
              <div className="flex flex-col justify-center gap-4 lg:justify-start md:flex-row md:gap-4">
                <Link
                  to="https://github.com/use-ink/ink-examples"
                  className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
                >
                  <Button size="lg" variant="secondary">
                    See ink! examples
                  </Button>
                </Link>
              </div>
            }
            media={<RustMedal />}
          />
        </BubbleContainer>
      </div>
    </section>
  )
}
