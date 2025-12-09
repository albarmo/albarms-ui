import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";
import { Plus } from "lucide-react";

describe("Button Component (CVA Version)", () => {
  test("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("applies variant classes (tailwind + cva)", () => {
    const { rerender } = render(<Button variant="primary">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-blue-600");

    rerender(<Button variant="outline">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("border");

    rerender(<Button variant="ghost">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:bg-gray-100");

    rerender(<Button variant="link">Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:underline");
  });

  test("applies size classes", () => {
    const { rerender } = render(<Button size="sm">Size</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-3");

    rerender(<Button size="md">Size</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-4");

    rerender(<Button size="lg">Size</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-5");
  });

  test("shows loading spinner when loading=true", () => {
    render(<Button loading>Loading...</Button>);

    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-disabled", "true");
    expect(btn.querySelector("span.animate-spin")).toBeInTheDocument();
  });

  test("disables the button when disabled=true", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");

    expect(btn).toHaveAttribute("disabled");
    expect(btn).toHaveAttribute("aria-disabled", "true");
  });

  test("does not call onClick when disabled", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Nope
      </Button>
    );

    fireEvent.click(screen.getByText("Nope"));
    expect(onClick).not.toHaveBeenCalled();
  });

  test("renders left and right icons", () => {
    render(
      <Button leftIcon={<Plus data-testid="left" />} rightIcon={<Plus data-testid="right" />}>
        Icon Button
      </Button>
    );

    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  test("supports asChild", () => {
    render(
      <Button asChild>
        <a href="/cool">Go</a>
      </Button>
    );

    const link = screen.getByText("Go");
    expect(link.tagName).toBe("A");
  });

  test("calls onClick when enabled", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hit</Button>);

    fireEvent.click(screen.getByText("Hit"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("matches snapshot", () => {
    const { container } = render(<Button variant="primary">Snapshot</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
