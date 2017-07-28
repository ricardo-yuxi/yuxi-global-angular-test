# Yuxi Global - Angular Test

## Introduction

In this test you will be asked to build a set of functionalities in Angular. You will be provided a set of **mockups** and a **base project** we have already setup for you in this repository. 

> We will review your submission following the evaluation criteria, make sure you don't miss it!

## Challenge Definition

You must build the following interface using the base project:

Team Challenges

![Team Challenges](screenshots/team-challenges.png)

My Challenges

![My Challenges](screenshots/my-challenges.png)

The data associated with the mockups is attached in this repository as `json` files. Take a look at the `fake-data` folder.

## Base Project

The base project (you will use as starting point) is hosted in this repository and it's deployed [here](https://jdjuan.github.io/yuxi-global-angular-test/)

![My Challenges](screenshots/solution-area.png)

The red square is where we want to see the functionality you build.

## Evaluation Criteria

Category          | Percentage   |
:----------------:|:------------:|
Creativity        |     50%      |
Code Quality      |     30%      |
Browser Support   |     20%      |

### Creativity

We'd love to see if you are capable of coming up with a more usable and intuitive interface. A completely new looking version of the existing. Maybe you would get rid of the tabs, or perhaps the ellipsis. It's your call. Whatever that makes us say: "Wow!"

### Code Quality

How readable, clean and modular is your code? Are you using the best practices?

### Browser Support

We don't to browser behind, make sure your website renders correctly in Edge and IE11.

## Setup your development environment

If you don't have a GitHub account, you must create one.

1. Fork this repository
2. Clone it in your local development environment
3. Run `npm install`
4. Run `npm start`
5. Now you should see [this](https://jdjuan.github.io/yuxi-global-angular-test/) in your local machine
6. You are all setup and ready to start

## Delivery Conditions

Your solution should be delivered through the forked GitHub repository. It should meet the following conditions:

1. Make sure the repository is public so anyone can see the code
2. We will clone your repository and test locally, if your solution requires additional setup besides `$ npm install` and `$ npm start`, then make sure you state it in the `README.md` file.
3. Your solution should be deployed live so that we can also hit a URL and see it. We recommend you to use [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch) but it is up to you.

> If deploying to GitHub pages remember to use the command: `ng build --prod --aot -bh ./`

## Deadline

The solution must be submitted and uploaded in your repository before Tuesday, August 2nd at 11:59 a.m.

## Additional Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

### Third-party libraries

You are free to use third-party libraries as long as you have a good reasong for it.


---


# How to read the data?

The following is a description of every single data shown in the interface 

### Team Challenges

#### Pending to Review

The challenges **Pending to Review** are shown according to the property `numberToReview` which is present on each item of the `TeamChallenges.json`

#### To be Completed

**Challenges to be completed** can be calculated taking a look at the `completedDate` property. If it is `null`, then such challenge is still incomplete.

#### Complete Now Button

The **Complete Now** button should appear for challenges that haven't been completed. Again, those are the challenges whose `completedDate` property is `null`.

### Dashboard Graphics

#### Entries to review

This is the result of calculating the sum of all the entries (`numberOfEntries`) of all the Team Challenges.

#### Personal Status

The **Average Score** is the average of every Overall Score (`overallScore`) of each of the completed (Challenges whose `completedDate` property is different than `null`) challenges from my Challenges.

#### Challenges to Complete

The **Challenges to Complete** value is the number of all the challenges whose `completedDate` property is null.

