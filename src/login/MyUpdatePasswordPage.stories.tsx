import type { Meta, StoryObj } from "@storybook/react";
import MyUpdatePasswordPage from "./MyUpdatePasswordPage";
import { getKcContextMock } from "./KcPageStory";
import type { KcContext } from "./KcContext";

const meta: Meta<typeof MyUpdatePasswordPage> = {
    title: "Login/MyUpdatePasswordPage",
    component: MyUpdatePasswordPage,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        kcContext: getKcContextMock({
            pageId: "login-update-password.ftl",
            overrides: {
                username: "fulano.de.tal"
            }
        }) as Extract<KcContext, { pageId: "login-update-password.ftl" }>
    }
};
