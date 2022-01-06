// Lets define an interface that we want to use
interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date
}

// Our function will take parameters that are needed in order to build a value of CourseGoal type
function createCourseGoal (title: string, description: string, date: Date): CourseGoal {
    // In some scenarios we want to build our value one step at the time. In order to do that more easily, and not have to
    // for example keep all property values in temporary variables until we are ready, we can use built-in utility helpers
    // An example of built-in utility helpers is the Partial. With partial we can constructs a type with all properties set to optional.
    const courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date

    return courseGoal as CourseGoal
}

console.log(createCourseGoal('Aleksa', 'Description', new Date()))

// Another example of the utility type would be Required
interface Props {
    property1?: string,
    property2?: number
}

// Since we marked all the properties as optional this will work
const props: Props = {
    property1: 'Test'
}

console.log(props)

// Here comes the Required utility type in help and we must define all the properties of the type
const props2: Required<Props> = {
    property1: 'Test',
    property2: 3
}

console.log(props2)

// You can read more about utility types here - https://www.typescriptlang.org/docs/handbook/utility-types.html
