import { NextUIProvider } from '@nextui-org/react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <NextUIProvider>{children}</NextUIProvider>
    </AntdRegistry>
  )
}
