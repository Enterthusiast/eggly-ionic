angular.module('categories.bookmarks.create', [])
    .directive('createModal', function createModal() {
        return {
            scope: {},
            templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
            controller: 'CreateBookMarkCtrl',
            controllerAs: 'createBookmarkCtrl',
            bindToController: {
                modal: '=',
                create: '&'
            }
        }
    })
    .controller('CreateBookMarkCtrl', function($stateParams, BookmarksModel, CategoriesModel) {
        var createBookmarkCtrl = this;

        function cancelCreating() {
            createBookmarkCtrl.modal.remove();
        }

        function createBookmark() {
            BookmarksModel.createBookmark(createBookmarkCtrl.newBookmark);

            createBookmarkCtrl.create();
            createBookmarkCtrl.modal.remove();
        }

        function resetForm() {
            createBookmarkCtrl.newBookmark = {
                title: '',
                url: '',
                category: $stateParams.category
            };
        }

        createBookmarkCtrl.cancelCreating = cancelCreating;
        createBookmarkCtrl.createBookmark = createBookmark;

        resetForm();
    });
