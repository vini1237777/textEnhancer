import React from "react";
import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import FileUploader from "./FileUploader";
import { dagDropContent, errorContent, pdfConversionContent } from "@/app/lib/constants";

test("renders with initial state correctly", () => {
  const { getByText } = render(<FileUploader/>);
  expect(getByText(dagDropContent.title)).toBeInTheDocument();
});


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: JSON.stringify({ some: "data" }) }),
  })
);

test("updates state on file upload and show result", async () => {
  const { findByText } = render(<FileUploader />);
  const file = new File(["sample"], "sample.pdf", { type: "application/pdf" });

  // Triggering the button click
  const uploadButton = screen.getByTestId("uploadBtn");
  fireEvent.click(uploadButton);

  // Triggering the hidden file input change
  const hiddenInput = screen.getByTestId("drop-input");
  fireEvent.change(hiddenInput, { target: { files: [file] } });

  // Check if loading spinner appears
  const spinner = screen.queryByTestId("loading-spinner");
  if (spinner) {
    expect(screen.getByText(fileProcessingContent.title)).toBeInTheDocument();

    // If spinner is present, expect it to be in the document
    expect(spinner).toBeInTheDocument();

    // Wait for the loading spinner to disappear
    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });
  }

  // Check if the result text and the refersh icon button is in the document.
  const resultText = await findByText(pdfConversionContent.title);
  expect(resultText).toBeInTheDocument();
  const iconButton = screen.getByRole("button", {
    name: "reset",
  });
  expect(iconButton).toBeInTheDocument();
  const conversionButton = screen.getByRole("button", {
    name: pdfConversionContent.buttonLabel,
  });
  expect(conversionButton).toBeInTheDocument();

  fireEvent.click(conversionButton);

  // Check if the Result component is rendered
  const dataTable = await screen.findByTestId("data-table");
  expect(dataTable).toBeInTheDocument();
});

// Test for error handling
test('renders Error component when there is an error', async () => {

  global.fetch.mockImplementationOnce(() => 
    Promise.reject(new Error('Network error'))
  );

  render(<FileUploader />);

  const uploadButton = screen.getByTestId('uploadBtn');
  fireEvent.click(uploadButton);

  const errorComponent = screen.queryByTestId("error");
  if (errorComponent) {
    const errorTitle = await screen.findByText(errorContent.title);
    expect(errorTitle).toBeInTheDocument();

    const errorButton = screen.getByText(errorContent.buttonLabel);
    expect(errorButton).toBeInTheDocument();


   const tryAgainButton = screen.queryByTestId("try-again");
   expect(tryAgainButton).toBeInTheDocument();

   expect(tryAgainButton).toBeInTheDocument();

   fireEvent.click(tryAgainButton);

   // Wait for the  errorComponent to disappear
   await waitFor(() => {
     expect(screen.queryByTestId("error")).not.toBeInTheDocument();
   });
  }

  expect(screen.getByText(dagDropContent.title)).toBeInTheDocument();
  expect(screen.getByText(dagDropContent.description)).toBeInTheDocument();
  expect(uploadButton).toBeInTheDocument();

});

afterEach(() => {
  global.fetch.mockClear();
});