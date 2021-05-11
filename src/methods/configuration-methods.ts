/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import {
  Prop,
  ButtonStyle,
  ResponseType,
  DispatchOnType,
} from '../constants';

export abstract class HasAsUser extends Builder {
  /**
   * @description Sets the message to be sent as either the user whose auth token is being used or as the bot user associated with your app.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public asUser(boolean = true): this {
    return this.set(boolean, Prop.AsUser);
  }
}

export abstract class HasClearOnClose extends Builder {
  /**
   * @description Instructs the Slack API to close all open views in the view stack when this particular view is closed.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public clearOnClose(boolean = true): this {
    return this.set(boolean, Prop.ClearOnClose);
  }
}

export abstract class HasDanger extends Builder {
  /**
   * @description For a button element, this changes the color to red. For confirmation dialogs, this sets the main button in the bottom right corner to red, indicating that an action is potentially destructive.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public danger(boolean = true): this {
    if (boolean) {
      return this.set(ButtonStyle.Danger, Prop.Style);
    }

    return this;
  }
}

export abstract class HasDefaultToCurrentConversation extends Builder {
  /**
   * @description Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available.
   *
   * **Slack Validation Rules and Tips:**
   *    * If initial conversations are provided, this option is ignored.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public defaultToCurrentConversation(boolean = true): this {
    return this.set(boolean, Prop.DefaultToCurrentConversation);
  }
}

export abstract class HasDeleteOriginal extends Builder {
  /**
   * @description Instructs the Slack API to delete the message from which the interaction originated when sending the current message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public deleteOriginal(boolean = true): this {
    return this.set(boolean, Prop.DeleteOriginal);
  }
}

export abstract class HasDispatchAction extends Builder {
  /**
   * @description Instructs the Slack API to send an interaction event to your app when the element in the input block has been interacted with.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchAction(boolean = true): this {
    return this.set(boolean, Prop.DispatchAction);
  }
}

export abstract class HasDispatchActionOnCharacterEntered extends Builder {
  /**
   * @description Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchActionOnCharacterEntered(boolean = true): this {
    if (boolean) {
      return this.set(DispatchOnType.OnCharacterEntered, Prop.OnCharacterEntered);
    }

    return this;
  }
}

export abstract class HasDispatchActionOnEnterPressed extends Builder {
  /**
   * @description Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchActionOnEnterPressed(boolean = true): this {
    if (boolean) {
      return this.set(DispatchOnType.OnEnterPressed, Prop.OnEnterPressed);
    }

    return this;
  }
}

export abstract class HasEphemeral extends Builder {
  /**
   * @description Instructs the Slack API to display the message only to the user who invoked the interaction payload or slash command.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ephemeral(boolean = true): this {
    if (boolean) {
      return this.set(ResponseType.Ephemeral, Prop.ResponseType);
    }

    return this;
  }
}

export abstract class HasExcludeExternalSharedChannels extends Builder {
  /**
   * @description Excludes conversations shared with external organizations from the menu's options.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public excludeExternalSharedChannels(boolean = true): this {
    return this.set(boolean, Prop.ExcludeExternalSharedChannels);
  }
}

export abstract class HasExcludeBotUsers extends Builder {
  /**
   * @description Excludes conversations with bot users from the menu's options.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public excludeBotUsers(boolean = true): this {
    return this.set(boolean, Prop.ExcludeBotUsers);
  }
}

export abstract class HasIgnoreMarkdown extends Builder {
  /**
   * @description Instructs the Slack API to ignore any markdown in the text property of the message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ignoreMarkdown(boolean = false): this {
    return this.set(boolean, Prop.Mrkdwn);
  }
}

export abstract class HasInChannel extends Builder {
  /**
   * @description Instructs the Slack API to make the message visible to everyone in the channel from which the interaction payload or slash command originated.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public inChannel(boolean = true): this {
    if (boolean) {
      return this.set(ResponseType.InChannel, Prop.ResponseType);
    }

    return this;
  }
}

export abstract class HasMultiline extends Builder {
  /**
   * @description Sets the text input to be a larger, multi-line input for larger portions of text.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public multiline(boolean = true): this {
    return this.set(boolean, Prop.Multiline);
  }
}

export abstract class HasNotifyOnClose extends Builder {
  /**
   * @description Instructs the Slack API to send an interaction payload to your app when the view is closed.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public notifyOnClose(boolean = true): this {
    return this.set(boolean, Prop.NotifyOnClose);
  }
}

export abstract class HasOptional extends Builder {
  /**
   * @description Lets the Slack API know that inputting data in the the input is not required for the view to be successfully submitted.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public optional(boolean = true): this {
    return this.set(boolean, Prop.Optional);
  }
}

export abstract class HasPrimary extends Builder {
  /**
   * @description For a button element, this changes the color to green. For confirmation dialogs, this sets the main button in the bottom right corner to green, which is meant to confirm the action.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public primary(boolean = true): this {
    if (boolean) {
      return this.set(ButtonStyle.Primary, Prop.Style);
    }

    return this;
  }
}

export abstract class HasReplaceOriginal extends Builder {
  /**
   * @description Instructs the Slack API to replace the original message, from which the interaction payload originated, with the current message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public replaceOriginal(boolean = true): this {
    return this.set(boolean, Prop.ReplaceOriginal);
  }
}

export abstract class HasResponseUrlEnabled extends Builder {
  /**
   * @description Instructs the Slack API to provide a response URL at view submission.
   *
   * **Slack Validation Rules and Tips:**
   *    * Only available in views with input blocks.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public responseUrlEnabled(boolean = true): this {
    return this.set(boolean, Prop.ResponseUrlEnabled);
  }
}

export abstract class HasSubmitDisabled extends Builder {
  /**
   * @description Configures the workflow step to have a disabled submit button until the user has input data into one or more inputs.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public submitDisabled(boolean = true): this {
    return this.set(boolean, Prop.SubmitDisabled);
  }
}
