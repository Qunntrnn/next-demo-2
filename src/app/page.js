"use client";


import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppButton } from "./components/app-button";

export default function Home() {
  const router = useRouter();
  const user = useSelector((rootState) => rootState.user);

  const goToStudentsPage = () => {
    router.push('/Students');
  };
  const signIn = () => {
    router.push('/sign-in');
  };
  const register = () => {
    router.push('/register');
  };
  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth);
  };  
  return (
    <main className="bg-lime-300 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">Students manager</h1>
        
          {!user.id && (
            <>
              <AppButton className="mr-2" color="blue" onClick={signIn}>
                Sign in
              </AppButton>
              <AppButton className="mr-2" color="blue" onClick={register}>
                Register
              </AppButton>         
            </>
          )}
          {!!user.id && (
            <>
              <div>Hello, {user.displayName}</div>
              <AppButton className="mr-2" color="red" onClick={signOutUser}>
                Sign out
              </AppButton>  
            </>         
          )}          
          <AppButton className="mr-2" color="blue" onClick={goToStudentsPage}>
            Go to Students
          </AppButton>                  
      
      </div>
    </main>
  );
}
