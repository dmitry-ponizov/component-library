import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import ProjectDetails from './components/ProjectDetails'
import configStore from '../store/config'
import LangProvider from '../localization/LangProvider'
import '../localization/i18n'

const store = configStore()

const DocumentAssetManagement = () => {
  return (
    <StoreProvider store={store}>
      <LangProvider>
        <ProjectDetails />
      </LangProvider>
    </StoreProvider>
  )
}

export default DocumentAssetManagement
