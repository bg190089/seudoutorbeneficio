import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "footer" | "mobile"
  showText?: boolean
}

export default function Logo({ variant = "default", showText = true }: LogoProps) {
  const isFooter = variant === "footer"
  const isMobile = variant === "mobile"

  // Aumentando ainda mais os tamanhos para maior visibilidade
  const height = isMobile ? 60 : isFooter ? 60 : 100
  const width = isMobile ? 240 : isFooter ? 220 : 380

  return (
    <Link href="/" className="flex items-center group">
      <div className="flex items-center bg-white rounded-lg p-2" style={{ maxHeight: isMobile ? "90%" : "auto" }}>
        <Image
          src="/images/logo-transparent.png"
          alt="Seu Doutor Logo"
          width={width}
          height={height}
          className={`h-auto w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
          priority
          style={{
            height: "auto",
            width: "100%",
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            objectFit: "contain",
          }}
        />
      </div>
    </Link>
  )
}
