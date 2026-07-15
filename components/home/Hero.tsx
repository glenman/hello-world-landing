import { BASE_PATH } from "@/lib/site";

import {
  Badge,
  Button,
  Container,
  Heading,
  Section,
} from "@/components/ui";


export default function Hero() {
  return (
    <Section className="relative min-h-screen overflow-hidden">


      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/hero.webp')`,
        }}
      />


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />


      {/* Glow Effects */}
      <div
        className="
          absolute
          left-20
          top-40
          h-72
          w-72
          rounded-full
          bg-indigo-500/30
          blur-3xl
        "
      />


      <div
        className="
          absolute
          bottom-20
          right-20
          h-96
          w-96
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />


      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">


        <Container>


          <div className="max-w-3xl">


            {/* Badge */}
            <div className="mb-8">

              <Badge>
                ✨ Welcome To The Future
              </Badge>

            </div>



            {/* Heading */}
            <Heading
              title="欢迎来到"
              highlight="这个世界"
              description="
                探索无限可能，
                用现代科技连接世界，
                创造属于你的未来。
              "
            />



            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-5">


              <Button size="lg">
                开始探索
              </Button>



              <Button
                variant="outline"
                size="lg"
              >
                了解更多
              </Button>


            </div>


          </div>


        </Container>


      </div>


    </Section>
  );
}