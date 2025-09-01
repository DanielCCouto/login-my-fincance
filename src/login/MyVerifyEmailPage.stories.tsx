import type { Meta, StoryObj } from "@storybook/react";
import MyVerifyEmailPage from "./MyVerifyEmailPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyVerifyEmailPage> = {
    title: "Login/MyVerifyEmailPage",
    component: MyVerifyEmailPage,
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
            pageId: "login-verify-email.ftl",
            overrides: {
                user: {
                    email: "usuario@exemplo.com"
                }
            }
        })
    }
};
