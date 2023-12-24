import Image from 'next/image'
import Link from 'next/link'
import style from './Page.module.css'

export default function Home() {
  return (
    <>
      <section className="container mx-auto flex flex-col md:flex-row gap-10 justify-center items-center flex-1 pb-20">
        <div className="w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-sky-100 font-extrabold mb-10">
            Pueba Técnica
            <span className="text-[#05D3F7]"> Promarketing</span>
          </h1>
          <p className="text-2xl font-normal mb-10 text-sky-100">React - Next.js</p>

          <Link href={'/technical-test/cards'} className={style['btn-to-technical-test']}>
            Ver prueba
          </Link>
        </div>

        <div className="w-2/5 ">
          <Image
            src={'/assets/nextjs-icon.svg'}
            width={400}
            height={400}
            alt='Logo-next.js'
            className={style.circle}
          />
          {/* <div className={style.circle}></div> */}
        </div>

      </section>
    </>

  )
}
