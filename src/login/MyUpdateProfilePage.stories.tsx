import type { Meta, StoryObj } from "@storybook/react";
import MyUpdateProfilePage from "./MyUpdateProfilePage";
import { getKcContextMock } from "./KcPageStory";
import type { KcContext } from "./KcContext";

const meta: Meta<typeof MyUpdateProfilePage> = {
    title: "Login/MyUpdateProfilePage",
    component: MyUpdateProfilePage,
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
            pageId: "login-update-profile.ftl",
            overrides: {
                profile: {
                    attributes: [
                        {
                            name: "username",
                            displayName: "Nome de Usuário",
                            value: "johndoe",
                            validators: {}
                        },
                        {
                            name: "email",
                            displayName: "E-mail",
                            value: "john.doe@example.com",
                            validators: {}
                        },
                        {
                            name: "firstName",
                            displayName: "Primeiro Nome",
                            value: "John",
                            validators: {}
                        },
                        {
                            name: "lastName",
                            displayName: "Último Nome",
                            value: "Doe",
                            validators: {}
                        }
                    ]
                }
            }
        }) as Extract<KcContext, { pageId: "login-update-profile.ftl" }>
    }
}; 