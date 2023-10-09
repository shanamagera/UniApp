<template>
    <div id='courses'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto">
                    <v-toolbar
                    color="teal"
                    theme="dark"
                    >
                    <v-toolbar-title class="text-h6">
                        Courses
                    </v-toolbar-title>
                    </v-toolbar>
                 <v-container>
                    <v-table>
                 <thead>
                     <tr>
                        <th class="text-left"> Course Name </th>
                        <th class="text-left">Department</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr
                     v-for="student in courses" :key="courses.id">
                     <td>{{ student.coursename }}</td>
                     <td>{{ student.department }}</td>
                     </tr>
                    </tbody>
                    </v-table>
                 </v-container> 
                 <v-divider></v-divider> 
                </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>
<script>
export default {
   data(){
    return{
        courses: [
            {coursename:'Full Stack',
            department:'iLab Africa'
            },
            {coursename:'Cybersecurity',
            department:'iLab Africa'
            },
            {coursename:'ACCA',
            department:'Business School'
            },
            {coursename:'Law',
            department:'Law School'
            },
            {coursename:'Machine Learning',
            department:'iLab Africa'
            },
            {coursename:'CPA',
            department:'Business School'
            },
            {coursename:'Acturial Science',
            department:'Business School'
            },
        ]
    }
   }
}
</script>