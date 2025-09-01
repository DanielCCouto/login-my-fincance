import type { Meta, StoryObj } from "@storybook/react";
import MyWebAuthnAuthenticatePage from "./MyWebAuthnAuthenticatePage";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta<typeof MyWebAuthnAuthenticatePage> = {
    title: "Login/MyWebAuthnAuthenticatePage",
    component: MyWebAuthnAuthenticatePage,
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
            pageId: "webauthn-authenticate.ftl",
            overrides: {
                challenge: "eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoi...",
                authenticators: {
                    authenticators: [
                        {
                            label: "iPhone Touch ID",
                            createdAt: "2024-01-15T10:30:00Z"
                        },
                        {
                            label: "Chave USB Yubikey",
                            createdAt: "2024-01-10T14:20:00Z"
                        }
                    ]
                }
            }
        })
    }
};
