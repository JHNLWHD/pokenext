import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

interface AppContextProps {
  nameSort: boolean
  setNameSort: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextProps>({
  nameSort: false,
  setNameSort: () => {},
})

function AppProvider({ children }: { children: ReactNode }) {
  const [nameSort, setNameSort] = useState(false)
  return (
    <AppContext.Provider
      value={{
        nameSort,
        setNameSort,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
