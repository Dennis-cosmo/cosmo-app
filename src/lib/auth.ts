import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import z from "zod";

// Esquema de validación para las credenciales
const credentialsSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

// Definimos las opciones de autenticación
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Validamos las credenciales con zod
          const parsedCredentials = credentialsSchema.safeParse(credentials);

          if (!parsedCredentials.success) {
            throw new Error("Credenciales inválidas");
          }

          const { email, password } = parsedCredentials.data;

          // Para GitHub Pages (sin backend), solo credenciales de demo
          if (email === "demo@cosmo.com" && password === "demo123456") {
            return {
              id: "demo-user",
              email: "demo@cosmo.com",
              name: "Demo User",
              firstName: "Demo",
              lastName: "User",
              isAdmin: false,
              companyName: "Demo Company",
              onboardingCompleted: true,
              accessToken: "demo-token",
            };
          }

          throw new Error(
            "Credenciales inválidas. Use demo@cosmo.com / demo123456"
          );
        } catch (error) {
          console.error("Error en la autenticación:", error);
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Error inesperado en la autenticación");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.isAdmin = user.isAdmin;
        token.companyName = user.companyName;
        token.onboardingCompleted = user.onboardingCompleted;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        if (!session.user) {
          session.user = {
            id: "",
            email: "",
            name: "",
            firstName: "",
            lastName: "",
            isAdmin: false,
            companyName: "",
            onboardingCompleted: false,
          };
        }

        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.companyName = token.companyName as string;
        session.user.onboardingCompleted = token.onboardingCompleted as boolean;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 horas
  },
  debug: process.env.NODE_ENV === "development",
  secret:
    process.env.NEXTAUTH_SECRET || "desarrollo_nextauth_secret_key_cosmo_app",
};
