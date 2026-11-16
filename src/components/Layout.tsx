 "use client"

import Loading from "@/app/loading";
import { persistor, store } from "@/redux/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <PersistGate loading={<Loading></Loading>} persistor={persistor}>
      {children}
    </PersistGate>
    
    </Provider>;
}
