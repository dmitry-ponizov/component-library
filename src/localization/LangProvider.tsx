import React, { Suspense } from 'react'

interface ILangProviderProps {
  children: JSX.Element
}

const LangProvider = ({ children }: ILangProviderProps) => {
  return <Suspense fallback={null}>{children}</Suspense>
}

export default LangProvider
