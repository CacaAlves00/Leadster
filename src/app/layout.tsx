import StyledComponentsRegistry from '../../lib/registry'
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <StyledComponentsRegistry>{children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
