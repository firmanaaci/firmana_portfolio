import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "40px",
        background: "linear-gradient(135deg, #1c4645 0%, #113331 100%)",
        color: "#f59e0b",
        fontSize: 110,
        fontWeight: 800,
        lineHeight: 1,
        border: "6px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      F
    </div>,
    { ...size },
  );
}
