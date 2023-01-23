import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/auth";
import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/app.routes";
import { Loading } from "../components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function routes() {
  const [loading, setLoading] = useState(true);
  const { user, setUser, signIn, signed } = useContext(AuthContext);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser && setUser(authenticatedUser);
      signIn(user?.stsTokenManager?.accessToken);
      setLoading(false);
      return;
    });
    setLoading(false);
    console.log("user:", user);
    return () => unSubscribe();
  }, [user]);

  return (
    <>
      {signed ? <AppRoutes /> : <AuthRoutes />}

      {loading && <Loading />}
    </>
  );
}
