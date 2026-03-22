// Lottie
import { LottiePlayer } from "zextra-plus/lottie";
const Lottie = LottiePlayer("https://assets1.lottiefiles.com/private_files/lf30_q2okh8lh.json").size("300px", "300px").style({
    border : "1px darkblue solid"
})

Lottie.useControls()
Lottie.mount(document.body)