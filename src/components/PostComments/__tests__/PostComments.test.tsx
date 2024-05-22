import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Testing insclusion of two comments", () => {
  test("Should render first comment", () => {
    const { debug } = render(<PostComment />);
    const comment = screen.getByTestId("input-comment");
    const btnPost = screen.getByTestId("btn-post");

    fireEvent.change(comment, {
      target: {
        value: "Nice!",
      },
    });
    fireEvent.click(btnPost);

    fireEvent.change(comment, {
      target: {
        value: "congrats!",
      },
    });
    fireEvent.click(btnPost);

    debug();
    expect(screen.getByText("Nice!")).toBeInTheDocument();
    expect(screen.getByText("congrats!")).toBeInTheDocument();
  });
});
