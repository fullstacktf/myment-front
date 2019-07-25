# Contributing to myment-front

First of all... :smile:
:raised_hands: thanks for contribute! :tada::+1:

The following is a set of guidelines for contributing to myment-front 

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Myment-front Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Myment Code of Conduct](CODE_OF_CONDUCT.md).

## What should I know before I get started?

### Myment and Repositories

We have two differents repository for two different functionalities.

[Myment FrontEnd](https://github.com/fullstacktf/myment-front)
[Myment BackEnd](https://github.com/fullstacktf/myment-back)


## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for **Myment**. Following these guidelines helps maintainers and developers understand your report :bookmark_tabs:, reproduce the behavior :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/fullstacktf/myment-front/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Perform a [search](https://github.com/fullstacktf/myment-front/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After read the guide, create an issue on that repository and provide the following information by filling in [the template](https://github.com/fullstacktf/myment-front/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started FullStacktf, e.g. which command exactly you used in the terminal, or how you started FullStacktf otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an FullStacktf command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of FullStacktf) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Myment?** What's the most recent version in which the problem doesn't happen? You can download older versions of Myment from [the releases page](https://github.com/fullstacktf/myment-front/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **What's the name and version of the OS you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for FullStacktf, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/fullstacktf/myment-front/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check the [debugging guide](https://flight-manual.atom.io/hacking-atom/sections/debugging/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of FullStacktf](https://flight-manual.atom.io/hacking-atom/sections/debugging/#update-to-the-latest-version) and if you can get the desired behavior by changing [FullStacktf's or packages' config settings](https://flight-manual.atom.io/hacking-atom/sections/debugging/#check-atom-and-package-settings).
* **Check if there's already [a package](https://atom.io/packages) which provides that enhancement.**
* **Determine [which repository the enhancement should be suggested in](#atom-and-packages).**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Aatom)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of FullStacktf which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most FullStacktf users and isn't something that can or should be implemented as a [community package](#atom-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of FullStacktf you're using.** You can get the exact version by running `atom -v` in your terminal, or by starting FullStacktf and running the `Application: About` command from the [Command Palette](https://github.com/atom/command-palette).
* **Specify the name and version of the OS you're using.**

### Pull Requests

The process described here has several goals:

- Maintain Myment's code quality
- Fix problems that are important to users
- Enable a sustainable system for Myment's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the past tense ("Added feature" not "Add feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * :beers: `:beers:` when improving the format/structure of the code
    * :dart: `:dart:` when improving performance
    * :coffee: `:coffee:` when writing docs
    * :eyeglasses: `:eyeglasses:` when fixing a bug
    * :skull: `:skull:` when removing code or files
    * :rocket: `:rocket:` when add code wait later fixings
    * :green_heart: `:green_heart:` when fixing the CI build
    * :sunny: `:sunny:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :pill: `:pill:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Local Modules (using relative paths)

### Test Styleguide

- Include thoughtfully-worded, well-structured [Jest](https://jestjs.io/) test in the `__test__` folder.
- Treat `describe` with the name of the class or component.
- Treat the state of test with `beforeEach`,`afterEach` or `beforeAll`,`afterAll`
- Treat `test` as a statement about state or how an operation changes state.

#### Example

```js
describe('Button', () => {
    // Applies only to tests in this describe block
    // Managing the state
    beforeEach(() => {
        return initializeDatabase();
    });
    afterEach(() => closeDatabase());

    test('click twice', () => {
        #spec here
    })
    
});
```

### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).

#### Example

```js
/*
*  Docs
*
*/
```

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

#### Type of Issue and Issue State

| Label name | `myment-front` :mag_right: | Description |
| --- | --- | --- |
| `enhancement`<span style="background-color:#83b8e8">__</span>| [search][search-myment-front-label-enhancement]   | Feature requests. |
| `bug`<span style="background-color:#CC0000">__</span> | [search][search-myment-front-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question`<span style="background-color:#cd237b">__</span>| [search][search-myment-front-label-question]   | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback`<span style="background-color:#fcc73a">__</span> | [search][search-myment-front-label-feedback]   | General feedback more than bug reports or feature requests. |
| `help-wanted`<span style="background-color:#46E251">__</span> | [search][search-myment-front-label-help-wanted]   | The FullStacktf core team would appreciate help from the community in resolving these issues. |
| `more-information-needed`<span style="background-color:#8A46E2">__</span> | [search][search-myment-front-label-more-information-needed]   | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction`<span style="background-color:#C346E2">__</span> | [search][search-myment-front-label-needs-reproduction]  | Likely bugs, but haven't been reliably reproduced. |
| `blocked`<span style="background-color:#FA0415">__</span> | [search][search-myment-front-label-blocked]   | Issues blocked on other issues. |
| `duplicate`<span style="background-color:#74b566">__</span> | [search][search-myment-front-label-duplicate]   | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix`<span style="background-color:#04B0FA">__</span> | [search][search-myment-front-label-wontfix]  | The FullStacktf core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid`<span style="background-color:#FAD104">__</span> | [search][search-myment-front-label-invalid]  | Issues which aren't valid (e.g. user errors). |

#### Pull Request Labels

| Label name | `myment-front` :mag_right: | Description
| --- | --- | --- |
| `work-in-progress`<span style="background-color:#6F04FA">__</span> | [search][search-myment-front-label-work-in-progress]   | Pull requests which are still being worked on, more changes will follow. |
| `needs-review`<span style="background-color:#FA0425">__</span> | [search][search-myment-front-label-needs-review]   | Pull requests which need code review, and approval from maintainers or FullStacktf core team. |
| `under-review`<span style="background-color:#04FAFA">__</span> | [search][search-myment-front-label-under-review]   | Pull requests being reviewed by maintainers or FullStacktf core team. |
| `requires-changes`<span style="background-color:#FA7F04">__</span> | [search][search-myment-front-label-requires-changes]  | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing`<span style="background-color:#3EFA04">__</span> | [search][search-myment-front-label-needs-testing]   | Pull requests which need manual testing. |

[search-myment-front-label-enhancement]: https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aenhancement
[search-myment-front-label-bug]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Abug
[search-myment-front-label-question]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aquestion
[search-myment-front-label-feedback]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Afeedback
[search-myment-front-label-help-wanted]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Ahelp-wanted
[search-myment-front-label-more-information-needed]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Amore-information-needed
[search-myment-front-label-needs-reproduction]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aneeds-reproduction
[search-myment-front-label-blocked]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Ablocked
[search-myment-front-label-duplicate]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aduplicate
[search-myment-front-label-wontfix]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Awontfix
[search-myment-front-label-invalid]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Ainvalid
[search-myment-front-label-work-in-progress]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Awork-in-progress
[search-myment-front-label-needs-review]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aneeds-review
[search-myment-front-label-under-review]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aunder-review
[search-myment-front-label-requires-changes]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Arequires-changes
[search-myment-front-label-needs-testing]:https://github.com/search?q=is%3Aopen+repo%3Afullstacktf%2Fmyment-front+label%3Aneeds-testing
