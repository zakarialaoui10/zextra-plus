# ziko-lottie ⚠️ (Deprecated)

> This package is deprecated and no longer maintained.

Lottie player element for zikojs is now part of **zextra-plus**.

---

## 🚨 Deprecation Notice

`ziko-lottie` has been moved and merged into a larger utilities package:

👉 Please use **zextra-plus** instead.

---

## 📦 New Installation

```bash
npm install zextra-plus
```
## Usage 
```js
import { LottiePlayer } from "zextra-plus/lottie";

const Lottie = LottiePlayer(
    "https://assets1.lottiefiles.com/private_files/lf30_q2okh8lh.json"
)
.size("300px", "300px")
.style({
    border: "1px darkblue solid"
});

Lottie.useControls();
```