import { HugeiconsIcon } from "@hugeicons/vue";
import { icons } from "../utils/icons";

export default {
	install(app) {
		// component
		app.component('HugeiconsIcon', HugeiconsIcon);

		// provide icons
		app.config.globalProperties.$icons = icons;
	}
};
