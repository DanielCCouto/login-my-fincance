import type { Meta, StoryObj } from "@storybook/react";
import MyConfigTotpPage from "./MyConfigTotpPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyConfigTotpPage> = {
    title: "Login/MyConfigTotpPage",
    component: MyConfigTotpPage,
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
            pageId: "login-config-totp.ftl",
            overrides: {
                totp: {
                    qrUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
                    totpSecret: "JBSWY3DPEHPK3PXP"
                }
            }
        })
    }
};
