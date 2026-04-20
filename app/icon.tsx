import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        background: "linear-gradient(135deg, #1c4645 0%, #0f2f2d 100%)",
        color: "#f59e0b",
        fontSize: 20,
        fontWeight: 800,
        lineHeight: 1,
        border: "1px solid rgba(245, 158, 11, 0.35)",
      }}
    >
      F
    </div>,
    { ...size },
  );
}
