import { expect, jest } from "@jest/globals";
import Home from "@/src/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Mock window.matchMedia
const mockMatchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe("Home Page", () => {
  beforeAll(() => {
    // Set up window.matchMedia mock
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: mockMatchMedia,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the page title correctly", async () => {
    await render(await Home());
    const header = screen.getByText("Blog Posts");
    expect(header).toBeInTheDocument();
  });

  it("renders the instruction text correctly", async () => {
    await render(await Home());
    const instructionText = screen.getByText(/To add a blog post/);
    expect(instructionText).toBeInTheDocument();
  });

  it("renders the dark mode toggle", async () => {
    await render(await Home());
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });

  // this is because there are 2 posts in the current directory
  it("renders the correct number of posts", async () => {
    await render(await Home());
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
