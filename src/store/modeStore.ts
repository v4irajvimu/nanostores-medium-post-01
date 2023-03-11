import { persistentAtom } from "@nanostores/persistent";

export const mode = persistentAtom<"dark" | "light">(
  "persistant-mode",
  "light",
  {
    encode: JSON.stringify,
    decode: JSON.parse,
    listen: true,
  }
);

export const toggleMode = () => {
  mode.set(mode.get() === "dark" ? "light" : "dark");
};
