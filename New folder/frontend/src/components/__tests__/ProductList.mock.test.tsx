import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi, type Mocked } from "vitest";
import { apiClient } from "../../services/api";
import { ProductList } from "../ProductList";

vi.mock("../../services/api");
const mockApiClient = apiClient as Mocked<typeof apiClient>;

describe("ProductList Mock Testing", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should mock product service and verify calls", async () => {
    const mockProducts = [
      {
        id: 1,
        name: "Mock Product",
        price: 100,
        quantity: 10,
        description: "Mock Description",
        category: "Electronics",
        active: true,
      },
    ];

    mockApiClient.getProducts.mockResolvedValue({
      data: { content: mockProducts },
      status: 200,
      statusText: "OK",
    } as any);

    render(<ProductList />);

    await waitFor(() => {
      expect(mockApiClient.getProducts).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Mock Product")).toBeInTheDocument();
    });
  });

  it("should handle empty product list", async () => {
    mockApiClient.getProducts.mockResolvedValue({
      data: { content: [] },
      status: 200,
      statusText: "OK",
    } as any);

    render(<ProductList />);

    await waitFor(() => {
      expect(mockApiClient.getProducts).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId("product-list")).toBeInTheDocument();
    });
  });
});
