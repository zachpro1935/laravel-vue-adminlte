<template>
  <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark"></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Starter Page</li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- Main content -->
        <slot>

        </slot>
        <!-- End main content -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContentWrapper'
}
</script>

<style lang="scss" scoped>
</style>