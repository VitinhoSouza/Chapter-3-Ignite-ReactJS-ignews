import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { SigInButton } from ".";

jest.mock("next-auth/react");

describe("SigInButton component", () => {
  it("renders correctly when user is not authenticated", () => {

    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({ data: null, status: "loading" });

    render(<SigInButton/>
    );

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "john.doe@example.com" },
        expires: "fake-expires",
      },
      status: "authenticated",
    })

    render (<SigInButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  });

});
