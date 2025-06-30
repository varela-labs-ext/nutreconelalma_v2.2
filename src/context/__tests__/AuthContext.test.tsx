// import { render, screen } from "@testing-library/react";
// import { AuthProvider, useAuth } from "../AuthContext";
// import { vi } from "vitest";

// const MockComponent = () => {
//   const { isAuthenticated, user } = useAuth();
//   return (
//     <div>
//       <span data-testid="auth">{isAuthenticated ? "true" : "false"}</span>
//       <span data-testid="user">{user || "none"}</span>
//     </div>
//   );
// };

// describe("AuthContext", () => {
//   it("provides default unauthenticated state", () => {
//     render(
//       <AuthProvider>
//         <MockComponent />
//       </AuthProvider>
//     );
//     expect(screen.getByTestId("auth").textContent).toBe("false");
//     expect(screen.getByTestId("user").textContent).toBe("none");
//   });
// });
