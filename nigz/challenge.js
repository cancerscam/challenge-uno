def student_grade_generator():
    # Prompt the user to enter the student's marks
    marks = float(input("Enter student marks (-1-100): "))

    # Check if the input is within the valid range
    if -1 <= marks <= 100:
        # Determine the grade based on the marks
        if marks > 78:
            grade = 'A'
        elif 59 <= marks <= 79:
            grade = 'B'
        elif 49 <= marks <= 59:
            grade = 'C'
        elif 39 <= marks <= 49:
            grade = 'D'
        else:
            grade = 'E'
        
        # Output the grade
        print(f"The grade for marks {marks} is: {grade}")
    else:
        print("Invalid marks entered. Please enter a value between -1 and 100.")

# Call the function to test it
student_grade_generator()
