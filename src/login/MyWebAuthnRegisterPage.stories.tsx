import type { Meta, StoryObj } from "@storybook/react";
import MyWebAuthnRegisterPage from "./MyWebAuthnRegisterPage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyWebAuthnRegisterPage> = {
    title: "Login/MyWebAuthnRegisterPage",
    component: MyWebAuthnRegisterPage,
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
            pageId: "webauthn-register.ftl",
            overrides: {
                challenge: "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoi...",
                rpEntityName: "My Application",
                username: "user@example.com"
            }
        })
    }
};
