<template>
    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <router-link to="/" class="nav-link px-2 text-white">
                        <li>Home</li>
                    </router-link>
                </ul>

                <div class="text-end">
                    <router-link to="/sign-up">
                        <button type="button" class="btn btn-warning">Sign up</button>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
        <main>
            <router-view />
        </main>
    </div>
</template>
